# Unit test for lipsum parser
lipsumParser = require "../lib/parser"

describe "the lipsum parser", ->
  parser = null
  initEmptyParser = null
  payload = "<test>This is a test</test>"
  jsonPayload = '{"test": "This is a test"}'
  mock =
    succCallback: ->
      return true
    errCallback: ->
      return true
  asyncWaitForCall = (spyFunc, funcName) ->
    waitsFor((->
      return spyFunc.callCount > 0),
      "#{funcName} to be called", 1000)

  beforeEach ->
    initEmptyParser = new lipsumParser()
    parser = new lipsumParser(payload)
    spyOn(mock, 'succCallback')
    spyOn(mock, 'errCallback')

  afterEach ->
    parser = null
    initEmptyParser = null

  it "should initialize with a null payload", ->
    expect(initEmptyParser._payload).toBe(null)

  it "should be able to initialize with a given payload", ->
    expect(parser._payload).toEqual(payload)

  it "should be able to be fed a payload after initialization", ->
    initEmptyParser.feed payload
    expect(initEmptyParser._payload).toEqual(payload)

  it "should be able to parse XML without error", ->
    parser.parse()

  it "should be able to parse JSON without error", ->
    initEmptyParser.feed(jsonPayload).parse()

  it "should be able to call a success callback on a successful parse", ->
    parser.parse(mock.succCallback)
    asyncWaitForCall(mock.succCallback, "success callback")

  it "should be able to call an error callback on error", ->
    try
      initEmptyParser.feed("<a>>>>sdlkjgdhsalfkjage;a;;;;;;&*%").parse((-> {}), mock.errCallback)
    asyncWaitForCall(mock.errCallback, "error callback")

  describe "as a subclass of events.EventEmitter", ->
    it "should be able to respond to an emitted success event", ->
      parser.on('success', mock.succCallback)
      parser.parse()
      asyncWaitForCall(mock.succCallback, "success callback")

    it "should be able to respond to an emitted error event", ->
      initEmptyParser.feed("<ate.a gasg >>asdtasdlkjgdhsalfkjage;a;;;;;;&*%")
      initEmptyParser.on('error', mock.errCallback)
      initEmptyParser.parse()
      asyncWaitForCall(mock.errCallback, "error callback")

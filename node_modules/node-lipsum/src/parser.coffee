###
  # Lipsum Parser

  Detects whether input is XML or JSON and parses accordingly.
  Parsing within the file provides the advantage of decoupling server calls with
  calls to the parser, as it is able to be agnostic to the format received. It
  cannot, however, parse HTML (nor should it have to).
###
XMLParser = require('xml2js').Parser
events = require('events')

class LipsumParser extends events.EventEmitter
  constructor: (payload) ->
    ### Instantiates the class with an optional payload ###
    @_xmlParser = new XMLParser()
    @_payload = if payload? then payload else null
    @parsedOutput = null

  feed: (payload) =>
    ###
    Given a payload (which should be XML or JSON), it stores
    this and then returns itself for chainability.
    ###
    @parsedOutput = null
    @_payload = payload
    this

  parse: (successCallback, errCallback) =>
    ###
    Parses the payload it was Given

    successCallback: {Function} called on successful parse.
                     Takes one parameter that contains the parsed
                     output.

    errCallback: {Function} called on parsing error from XML parser.
                 Note that this will be called even if the payload is JSON,
                 since JSON is attempted to be parsed first.
    ###
    successCallback = successCallback or -> {}
    errCallback = errCallback or -> {}

    if not @_payload?
      throw new ReferenceError("Nothing to parse.")

    if @parsedOutput?
      @_success(successCallback, @parsedOutput)
      return

    # First attempt to parse the JSON string
    @parsedOutput = @_attemptParseJSON()

    # If that didn't work than try parsing it as XML
    xmlParseErrors = null
    if not @parsedOutput?
      xmlSuccCallback = (result) =>
        @parsedOutput = result
      xmlErrCallback = (err) ->
        xmlParseErrors = err
      @_attemptParseXML(xmlSuccCallback, xmlErrCallback)

    if @parsedOutput?
      @_success(successCallback, @parsedOutput)
    else
      if xmlParseErrors?
        @_error(errCallback, xmlParseErrors)
      else
        errMsg = "Could not parse #{@_payload}"
        @_error(errCallback, errMsg)

    return this

  _attemptParseJSON: =>
    try
      return JSON.parse @_payload
    catch SyntaxError
      return

  _attemptParseXML: (onSuccess, onError) =>
    @_xmlParser.parseString @_payload, (err, result) ->
      if err
        if onError? then onError(err)
        
      onSuccess(result)

  _success: (succCallback, data) =>
    succCallback(data)
    @emit('success', data)

  _error: (errCallback, data) =>
    errCallback(data)
    @emit('error', data)

module?.exports = LipsumParser

cli = require('../lib/cli')

describe "The lipsum command-line interface", ->
  run = (argv) ->
    cli.run(argv)
  cliSpy = null
  helpSpy = null

  beforeEach ->
    # Stop argparse from exiting after printing help message
    spyOn(cli._optparser, 'exit').andCallFake(-> {})
    cliSpy = spyOn(cli, '_run')
    helpSpy = spyOn(cli._optparser, 'printHelp')

  describe "Its default parameters", ->
    it "has a default amount argument", ->
      cliSpy.andCallFake( (argv) ->
        expect(argv.amount).toEqual(5)
      )
      run()

    it "has a default 'what' argument", ->
      cliSpy.andCallFake( (argv) ->
        expect(argv.what).toEqual('paras')
      )
      run()

    it "has a default 'start_with_lipsum' argument", ->
      cliSpy.andCallFake( (argv) ->
        expect(argv.start).toBe(false)
      )
      run()

  it "displays a help message when passed -h", ->
    run(['-h'])
    expect(helpSpy).toHaveBeenCalled()

  it "displays a help message when passed --help", ->
    run(['--help'])
    expect(helpSpy).toHaveBeenCalled()

  it "correctly parses arguments", ->
    cliSpy.andCallFake( (argv) ->
      expect(argv.amount).toEqual(10)
      expect(argv.what).toEqual('words')
      expect(argv.start).toBe(true)
    )
    run(['--amount', 10, '--what', 'words', '-s'])

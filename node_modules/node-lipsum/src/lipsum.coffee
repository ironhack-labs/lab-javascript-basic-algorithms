###
# Lorem Ipsum Wrapper

Main entry point for the node-lipsum module. Provides wrappers for
the Parser and Service classes as well as an easy method to get text
from the lipsum.com service.
###

Service = require('./service')
Parser = require('./parser')
events = require('events')

class Lipsum extends events.EventEmitter
  constructor: ->
    ### Class Constructor ###
    @parser = new Parser()
    @service = new Service()

  defaults:
    ###
    These parameters will be passed by default to lipsum.com in the query
    ###
    amount: 5
    what: 'paras'
    start: 'no'

  getText: (callback, opts) =>
    ###
    Retrieves dummy text from lipsum.com

    callback: {Function} Should take one parameter for the text
              returned from lipsum.com. Called on successful retrieval
              of said text.

    opts: {Object} Options to pass onto the lipsum.com query. These will
          be transformed into url query params, so if you pass in something
          like {start: 'yes', what: 'bytes'} that will become
          "?start=yes&what=bytes"
    ###
    if not opts then opts = @defaults else
      for prop in @defaults
        opts[prop] = @defaults[prop] unless opts[prop]?

    @service.get("json", @serviceCallback, opts)
    @once('lipsum', (txt) -> callback(txt))

  parserSuccessCallBack: (result) =>
    ### Called on successful parsing of returned dummy text. ###
    @emit('lipsum', result.feed.lipsum)

  parserErrorCallBack: (err) ->
    ### Called on Parser Error. ###
    throw new Error("Parser Error: #{err.message}")

  serviceCallback: (text) =>
    ###
    Called when the lipsum.com service succesfully retrieves
    text from the lipsum.com service.
    ###
    @parser.feed(text).parse(@parserSuccessCallBack,
                             @parserErrorCallBack)

module?.exports = Lipsum

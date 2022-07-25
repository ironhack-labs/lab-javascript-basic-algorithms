###
  # Web Service for lipsum.com

  Provides the low-level interface to the lipsum.com
  service.
###

http = require 'http'
url = require 'url'

class Service

  get: (format, callback, queryOpts) ->
    ###
    Retrieves the lipsum text.

    format: {String} one of "xml" or "json"

    callback: {Function} called on successful text retrieval.
              Should have one parameter to hold the response data.

    queryOpts: {Object} options to attach to the query portion of the url.
    ###
    urlopts =
      protocol: 'http:'
      hostname: 'lipsum.com'
      pathname: "/feed/#{format}"

    if queryOpts?
      urlopts.query = queryOpts

    endpoint = url.format urlopts
    req = http.request(endpoint, (res) ->
      payload = ""
      res.setEncoding('utf8')

      res.on('data', (chunk) ->
        payload += chunk.replace(/[\n|\t|\f|\v|\r]+/g, "\\n")
      )

      res.on('end', ->
        callback(payload)
      )
    ).on('error', (err) ->
      throw new Error("Service Error: #{err.message}")
    )

    req.end()

module?.exports = Service

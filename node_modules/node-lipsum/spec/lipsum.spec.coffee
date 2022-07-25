###
# Integration test for Lipsum Service
###

Lipsum = require('../lib/lipsum')

describe "Node-Lipsum", ->
  lipsum = new Lipsum()

  it "should return dummy text", ->
    runs ->
      text = null
      lipsum.getText (res) ->
        text = res
    
  it "can return dummy text starting with lorem ipsum", ->
    runs ->
      lipsum.getText (res) ->
        expect(res).toContain("Lorem ipsum dolor sit amet")
      , {start: true}

  it "can return different lengths of either paragraphs, words, " +
     "or bytes", ->
    runs ->
      lipsum.getText (res) ->
        expect(res.split(" ").length).toEqual(10)
      , {start: 'yes', what: 'words', amount: 10}

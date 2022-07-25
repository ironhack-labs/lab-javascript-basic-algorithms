require "shelljs/global"

task "test", "run all tests for the module", ->
  invoke "compile"
  sh "node_modules/jasmine-node/bin/jasmine-node --coffee --color spec"
  notice "Tests Passed!"

task "compile", "compile all coffeescript into javascript", ->
  invoke "lint"
  targetDistDir = "lib"
  targetSourceDir = "src"
  sh "coffee -b -o #{targetDistDir}/ -c #{targetSourceDir}/*.coffee"
  notice "All coffeescript has been compiled and placed in " +
         "#{__dirname}/#{targetDistDir}"

task "lint", "lint all coffeescript in the src/ dir", ->
  sh "node_modules/coffeelint/bin/coffeelint -r src/"
  notice "Coffeelint Passed!"

task "doc", "generate documentation for all modules in src/", ->
  sh "node_modules/coffeedoc/bin/coffeedoc src/"
  notice "Documentation Generated!"

# Taken from coffee-script/Cakefile
notice = (msg) ->
  stars = ("*" for _ in [1..msg.length+4]).join("")
  console.log "\n#{stars}\n* #{msg} *\n#{stars}\n"

sh = (cmd) ->
  console.log cmd
  retCode = exec(cmd).code
  if retCode? and retCode isnt 0
    console.log "Error: #{cmd} failed with exit code #{retCode}"
    exit 1

class TestReferee extends Component
  @className: 'TestReferee'

  attach: (thang) ->
    super(thang)
    thang.testsPassing = true
    
  assertTrue: (bool) ->
    unless bool
      @testsPassing = false unless bool
      console.log "FAILED assertion: expected", bool, "to be true"

  assertFalse: (bool) ->
    if bool
      console.log "FAILED assertion: expected", bool, "to be false"  
      @testsPassing = false if bool

  finishTests: ->
    state = (if @testsPassing then 'success' else 'failure')
    console.log "Tests finished:", state
    @setGoalState 'pass-tests', state
    
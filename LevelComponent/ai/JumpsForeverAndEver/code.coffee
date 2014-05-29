class JumpsForeverAndEver extends Component
  @className: "JumpsForeverAndEver"
  chooseAction: ->
    if @canAct 'jump'
      @setAction 'jump'
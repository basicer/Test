class ChasesAndAttacks extends Component
  @className: "ChasesAndAttacks"
  chooseAction: ->
    return unless @target and @target.team isnt @team
    @chaseAndAttack @target
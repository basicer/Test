class FightsBack extends Component
  @className: "FightsBack"
  chooseAction: ->
    return if not @lastAttacker or @lastAttacker.dead
    @attack @lastAttacker

  takeDamage: (damage, attacker) ->
    @lastAttacker = attacker
    @attack attacker unless @dead
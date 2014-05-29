Vector = require 'lib/world/vector'

class RunsInCircles extends Component
  @className: "RunsInCircles"
  chooseAction: ->
    @setTargetPos Vector.add @self.pos, {x: 10 * Math.cos(@world.age), y: 10 * Math.sin(@world.age)}
    @setAction 'move'

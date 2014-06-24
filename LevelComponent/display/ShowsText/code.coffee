class ShowsText extends Component
  @className: "ShowsText"

  showText: (text, displayOptions) ->
    displayOptions = _.pick displayOptions, 'color', 'size'
    displayOptions.text = text
    @addCurrentEvent "text-#{JSON.stringify(displayOptions)}"


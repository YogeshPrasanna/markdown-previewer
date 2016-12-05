var headers = {
  fontWeight: '600',
  color: '#993939',
  textAlign: 'left'
}

var outputArea = {
  backgroundColor: '#0F6C4F',
  color: '#efefef',
  borderWidth: '10px',
  borderStyle: 'solid',
  borderColor: '#784613',
  borderRadius: '6px',
  minHeight: '515px',
  cursor: 'not-allowed'
}

var inputArea = {
  backgroundColor: '#3B3B3B',
  color: '#efefef',
  borderWidth: '10px',
  borderStyle: 'solid',
  borderColor: '#B27B57',
  borderRadius: '6px',
}


class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 
`Level 1 Header
====================

Level 2 Header
---------------------

The quick brown fox jumped over the lazy
dog's back.

### Header 3

> This is a blockquote.
> 
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote

**Bold** 
*_Italics*_
`
    };
  }

  handleChange() {
    this.setState({value: this.refs.textarea.value});
  }

  rawMarkup() {
    return { __html: marked(this.state.value, {sanitize: true}) };
  }

  render() {
    return (
      <div style={{marginLeft: '15%'}}>
        <div className="col-sm-6 pad">
          <h2 style={headers}>Enter Text Here ...</h2>
          <div style={inputArea}>
            <textarea onChange={() => this.handleChange()} ref="textarea" defaultValue={this.state.value} className="pad"/>
          </div>
        </div>
        
        <div className="col-sm-6 pad">
          <h2 style={headers}>Result</h2>
          <div style={outputArea}>
            <div className="content pad" dangerouslySetInnerHTML={this.rawMarkup()} />
          </div>
        </div>
     </div>
    );
  }
};

var Heading = React.createClass({
  render: function(){
    return <div className="heading">Markdown Previewer</div>
  }
})

React.render(<Heading />,document.getElementById('heading'));
React.render(<MarkdownEditor />, document.getElementById('app'));
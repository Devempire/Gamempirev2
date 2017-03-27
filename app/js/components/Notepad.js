

module.exports = global.Notepad = React.createClass({


  getDefaultProps() {
    return {};
  },


    componentDidMount: function(){
      console.log("Notepad App component did mount.");
    },

  getInitialState() {
    var id = electron.remote.getGlobal('sharedObject').id;
    var data = electron.remote.getGlobal('sharedObject').data;
    return {
      data:data,
      id:id,

    };

  },

  edit(event){
    this.setState({data:event.target.value});
  },

  updatedata(){
    $.ajax({
          url:api_server+"/login/profile/dataupload",
          type:"PUT",
          contentType: 'application/json; charset=utf-8',
          data:JSON.stringify({
            _id:this.state.id,
            data:this.state.data
            })
            }).done((res)=>{
              electron.remote.getGlobal('sharedObject').data=this.state.data;
            }).fail((res)=>{
              console.log("fail");
            });


  },

  render() {
    return (
    <textarea rows="4" value={this.state.data} onChange={this.edit} onBlur={this.updatedata} wrap="virtual" cols="20"></textarea>
    );
  }
});


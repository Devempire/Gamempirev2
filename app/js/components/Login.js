module.exports = class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            renderChild: true,
            userName: null,
            password: null
        };

        this.handleChildUnmount = this.handleChildUnmount.bind(this);
    }

    handleChildUnmount() {
        this.setState({renderChild: false});
    }

    userSubmit(e) {
       if (e.key == 'Enter') {
         var psw = $("#passsword").val();
         var usr = $("#username").val();
         if (usr == "" || usr == null){
           $("#username").focus();
         }
         else if (psw == "" || psw == null){
           $("#passsword").focus();
         }else{
           $('#login').click();
         }
       }
    }

    passSubmit(e) {
       if (e.key == 'Enter') {
          $('#login').click();
       }
    }

    render() {

        return (


        <div id="loginContainer" className="row align-center align-middle noselect">
        <div className="content-loading"></div>
            <div className="medium-6 large-6 column">
            <img className="gamEmpireLogo" src="../app/img/GamEmpireLogo.png" />
                <div className="input-group required">
                    <input className="input-group-field noselect" type="text" id="username" placeholder="Username" onKeyPress={this.userSubmit.bind(this)} value={this.state.userName|| ''} onChange={(event)=> {this.setState({userName: event.target.value})}}/>
                    <span className="input-group-label">*</span>
                </div>
                <div className="input-group required">
                    <input className="input-group-field noselect" type="password" id="passsword" placeholder="Password" onKeyPress={this.passSubmit.bind(this)} value={this.state.password|| ''} onChange={(event)=> {this.setState({password: event.target.value})}}/>
                    <span className="input-group-label">*</span>
                </div>
                <center><div className="input-group-field" id="loginmsg"></div></center>
                <hr/>
                <button className="button" id="login" onClick={this._handleLogin.bind(this)}>Login</button>
                <button className="button secondary" onClick={this._handleRegistry.bind(this)}>Sign up</button>
            </div>
            <script type="text/javascript">

            </script>
        </div>

        );
    }

    _handleLogin() {

    var user_id = this.state.userName;
    var pwrd = this.state.password;
    if (user_id==null || user_id=="" || pwrd==null || pwrd=="")
      {
        $("#loginmsg").html("All fields must be filled in.<button id='close' onclick='$(this).parent().hide();' ></button>");
        $("#loginmsg").addClass('label warning input-group-field');
        $("#loginmsg").addClass("shake");
        $("#loginmsg").show();
        setTimeout(function () {
          $("#loginmsg").removeClass("shake");
        },200);
        return false;
      }
      $( ".content-loading" ).css("display:block;");
        $( ".content-loading" ).show();

        $.post(api_server+'/user/find',
        {
            username:this.state.userName,
            password:this.state.password
        })

            .done((res) =>{
              $( ".content-loading" ).fadeOut( "slow" );
              electron.remote.getGlobal('sharedObject').token = res;
              //$("#content").html("Welcome! You are logged in.")
              /*
                electron.remote.getGlobal('mainWnd').setContentSize(1152, 648);
                electron.remote.getGlobal('mainWnd').center();
                electron.remote.getGlobal('sharedObject').token = res;
              //LOAD REACT LOGGED IN DOM  window.location.href="./view/main.html";
              *

              ReactDOM.render(
                <Dashboard />,
                document.getElementById('main-content')
              )
*/
              ReactDOM.render(
                <SideBar />,
                document.getElementById('main-content')
              )
              //The <SideBar> loads a content div which will allow the screens to change while the sidebar remains untouched

              ReactDOM.render(
              	<Dashboard />,
              	document.getElementById('content')
              )

            })

            .fail((res)=>{
            $( ".content-loading" ).hide();
            $("#loginmsg").html("Wrong Username or Password<button id='close' onclick='$(this).parent().hide();' >");
            $("#loginmsg").addClass('label warning');
            $("#loginmsg").addClass("shake");
            $("#loginmsg").show();
            setTimeout(function () {
              $("#loginmsg").removeClass("shake");
            },200);
            });
    }
    _handleRegistry() {
        ReactDOM.render(
        <Registration />,
        document.getElementById('main-content')
      )
    }

}

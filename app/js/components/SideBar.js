module.exports = global.Bar = React.createClass({

	render() {
		return (
			<t>
			    <div id="mySidenav" className="sidenav">
						<a href="#" onClick={this._Dashboard} id="_Dashboard">Dashbaord</a>
						<a href="#" onClick={this._ProfileEdit} id="_ProfileEdit">Edit Profile</a>
					{	/* NOT WORKING YET
						<a href="#" id="2">Gaming Tools</a>
						<a href="#" id="3">Video Streams</a>
						<a href="#" id="4">Tips & Tricks</a>
						<a href="#" id="5">Guides</a>
						<a href="#" id="6">Esports</a>
						<a href="#" id="7">Chat </a>-->
						<a id="8" >+</a>
						*/}
						<a href="#" id="8" onClick={this._Logout}>Logout </a>
						<div className="toggleNav" onClick={this.toggleNav}></div>
			    </div>
					<div id="content">
              <div id="main_content"></div>
		    	</div>
			</t>

		);
	},
	toggleNav(){
				$("#mySidenav, #content").toggleClass("navOpen");
				if ( $("#mySidenav").hasClass("navOpen") ) {
						//do something it does have the protected class!
						$(".toggleNav").css({"cursor":"url('../app/img/arrow_in.png'), auto"});
				}else{
						$(".toggleNav").css({"cursor":"url('../app/img/arrow_out.png'), auto"});
				}

	},

	_Dashboard(){
		ReactDOM.render(
		  <Dashboard />,
		  document.getElementById('content')
		);
	},

	_ProfileEdit(){
		ReactDOM.render(
			<ProfileEdit />,
			document.getElementById('content')
		);
	},

	_Logout(){
		ipc.sendSync('loggedOut')
		ReactDOM.render(
		  <Login />,
		  document.getElementById('main-content')
		);
	}

});

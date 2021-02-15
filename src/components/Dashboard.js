import React, { Component } from 'react'
import './Dashboard.css'
 class Dashboard extends Component {
    render() {
        return (
            <div>
             <div className="dashboard">
    <div className="pro-header">
    <div className="back-img">
      <img src="img/amavubi.PNG" className="back-img" alt="back-img"  height="200px" />
      <button><a href="#">Change cover photo</a> </button>
    </div>
    <div className="hr">
      <hr />
    </div>

    <h4>Welcome @ Charles Karera : Have fun !!!</h4>
    <div className="hr">
    <hr />
  </div>
  </div >
    
   <div className="chat-perinf">
              <div className="person-info">
                
               <h1>Person info:</h1>
                <h4>Name:Charles</h4>
                <h4>Email:C@gmail.com</h4>
                <h4>Mobile:0788864000</h4>
                <button>Edit info</button>
              </div>
   <div className="container clearfix">
    <div className="people-list" id="people-list">
      <div className="search">
        <input type="text" placeholder="search" />
        <i className="fa fa-search"></i>
      </div>
      <ul className="list">
        <li className="clearfix">
          <img src="img/chat4.png" alt="chat" width="55" height="55" />
          <div className="about">
            <div className="name">Kabera</div>
            <div className="status">
              <i className="fa fa-circle online"></i> online
            </div>
          </div>
        </li>
        <li className="clearfix">
          <img src="img/chat4.png" alt="chat" width="55" height="55" />
          <div className="about">
            <div className="name">Forum</div>
            <div className="status">
               All members
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="img/chat4.png" alt="chat" width="55" height="55" />
          <div className="about">
            <div className="name">Mukama</div>
            <div className="status">
              <i className="fa fa-circle online"></i> online
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="img/chat4.png" alt="chat" width="55" height="55" />
          <div className="about">
            <div className="name">Mugabo</div>
            <div className="status">
              <i className="fa fa-circle online"></i> online
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="img/chat4.png" alt="chat" width="55" height="55" />
          <div className="about">
            <div className="name">Eric</div>
            <div className="status">
              <i className="fa fa-circle online"></i> online
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="img/chat7.png" alt="chat" width="55" height="55" />
          <div className="about">
            <div className="name">Byiringiro</div>
            <div className="status">
              <i className="fa fa-circle offline"></i> left 30 mins ago
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="img/chat7.png" alt="chat" width="55" height="55" />
          <div className="about">
            <div className="name">Kelly</div>
            <div className="status">
              <i className="fa fa-circle offline"></i> left 10 hours ago
            </div>
          </div>
        </li>
        
        <li className="clearfix">
          <img src="img/chat7.png" alt="chat" width="55" height="55" />
          <div className="about">
            <div className="name">Monica</div>
            <div className="status">
              <i className="fa fa-circle online"></i> online
            </div>
          </div>
        </li>
        
        
        <li className="clearfix">
          <img src="img/chat4.png" alt="chat" width="55" height="55" />
          <div className="about">
            <div className="name">Sugira</div>
            <div className="status">
              <i className="fa fa-circle online"></i> online
            </div>
          </div>
        </li>
      </ul>
    </div>
    
    <div className="chat">
      <div className="chat-header clearfix">
        <img src="img/chat4.png" alt="chat" width="55" height="55" /> 
        <div className="chat-about">
          <div className="chat-with">Kabera</div>
          <div className="chat-num-messages">already 1 902 messages</div>
        </div>
        <i className="fa fa-star"></i>
      </div> 
      
      <div className="chat-history">
        <ul>
          <li className="clearfix">
            <div className="message-data align-right">
              <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Charles</span> <i className="fa fa-circle me"></i>
              
            </div>
            <div className="message other-message float-right">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
        
            </div>
          </li>
          
          <li>
            <div className="message-data">
              <span className="message-data-name"><i className="fa fa-circle online"></i> Kabera</span>
              <span className="message-data-time">10:12 AM, Today</span>
            </div>
            <div className="message my-message">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            </div>
          </li>
          
          <li className="clearfix">
            <div className="message-data align-right">
              <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Charles</span> <i className="fa fa-circle me"></i>
              
            </div>
            <div className="message other-message float-right">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            </div>
          </li>
          
          <li>
            <div className="message-data">
              <span className="message-data-name"><i className="fa fa-circle online"></i> Kabera</span>
              <span className="message-data-time">10:20 AM, Today</span>
            </div>
            <div className="message my-message">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            </div>
          </li>
          
        </ul>
        
      </div> 
      
      <div className="chat-message clearfix">
        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                
        <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o"></i>
        
        <button>Send</button>

      </div> 
      
    </div> 
    
  </div> 
</div>
<button className="open-button" >Chat with another person</button>

</div>
            </div>
        )
    }
}

export default Dashboard;
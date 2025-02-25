import React from 'react'
import JoinedActivity from '../../Components/sections/joinedActivities/JoinedActivity';
import data from '../../Utils/data';
import ActivityRequest from '../../Components/sections/activityRequest/ActivityRequest';


function Home() {
  return (
    <div className="home-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile">
          <img
            src=""
            alt="User"
            className="profile-pic"
          />
          <h3>John Doe</h3>
          <p>@johndoe11</p>
        <nav>
          <ul>
            <li className="active">News Feed</li>
            <li> Messages</li>
            <li> Forums</li>
            <li> Friends</li>
            <li> Settings</li>
          </ul>
        </nav>
        </div>
      </aside>

      {/* Main Feed */}
      <main className="feed">
        <header>
          <h2>Activity</h2>
          <div className="feed-filters">
            <span>Recents</span>
            <span >Friends</span>
            <span>Popular</span>
          </div>
        </header>
        <div className="post">
          <div className="post-header">
            <img src="" alt="User" />
            <div>
              <h4>George Lobko</h4>
              <p>1 hour ago</p>
            </div>
          </div>
          <p>
            Hi everyone, today I was on the most beautiful mountain in the world
            🏔️. Who wants to join on the next trip?
          </p>
          <div className="post-images">
            <img src="https://pixabay.com/photos/mountaineer-snow-mountains-1185474/" alt="Pic1" />
            <img src="https://pixabay.com/photos/landscape-nature-mountain-tatry-7258771/" alt="Pic2" />
            <img src="https://pixabay.com/photos/mountain-climbing-snow-nature-8488489/" alt="Pic3" />
          </div>
          <div className="post-actions">
               <button> Join Activity  </button>
          </div>
        </div>
        <div className="post">
          <div className="post-header">
            <img src="" alt="User" />
            <div>
              <h4>George Lobko</h4>
              <p>1 hour ago</p>
            </div>
          </div>
          <p>
            Hi everyone, today I was on the most beautiful mountain in the world
            🏔️. Who wants to join on the next trip?
          </p>
          <div className="post-images">
            <img src="https://pixabay.com/photos/mountaineer-snow-mountains-1185474/" alt="Pic1" />
            <img src="https://pixabay.com/photos/landscape-nature-mountain-tatry-7258771/" alt="Pic2" />
            <img src="https://pixabay.com/photos/mountain-climbing-snow-nature-8488489/" alt="Pic3" />
          </div>
          <div className="post-actions">
               <button> Join Activity  </button>
          </div>
        </div>
        <div className="post">
          <div className="post-header">
            <img src="" alt="User" />
            <div>
              <h4>George Lobko</h4>
              <p>1 hour ago</p>
            </div>
          </div>
          <p>
            Hi everyone, today I was on the most beautiful mountain in the world
            🏔️. Who wants to join on the next trip?
          </p>
          <div className="post-images">
            <img src="https://pixabay.com/photos/mountaineer-snow-mountains-1185474/" alt="Pic1" />
            <img src="https://pixabay.com/photos/landscape-nature-mountain-tatry-7258771/" alt="Pic2" />
            <img src="https://pixabay.com/photos/mountain-climbing-snow-nature-8488489/" alt="Pic3" />
          </div>
          <div className="post-actions">
               <button> Join Activity  </button>
          </div>
        </div>

        <div className="new-post">
          <input type="text" placeholder="Share something..." />
          <button>Send</button>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
      <div className="stories">
          <h3>Activities Joined</h3>
          {
            data.ActivitiesJoined.map((ActivityJoined)=>(
              <JoinedActivity img={ActivityJoined.image} title={ActivityJoined.title}/>
            ))
          }
        </div>

        <div className="suggestions">
          <h3>Notification</h3>
          {
            data.usersRequest.map((userRequest)=>(
              <ActivityRequest title={userRequest.title}/>
            ))
          }
          <div className="suggestion">
            <p>Brittli Lando</p>
            <button>Follow</button>
          </div>
          <div className="suggestion">
            <p>Ivan Shevchenko</p>
            <button>Follow</button>
          </div>
        </div>

        <div className="recommendations">
          <h3>Recommendations</h3>
          <div className="tags">
            <span> UI/UX</span>
            <span> Music</span>
            <span> Cooking</span>
            <span>Hiking</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Home

import UserProfile from './components/UserProfile';

function App() {
  const users = [
  { id: 1, name: 'Bona S', job: 'Lead Developer', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Alice Smith', job: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Charlie Brown', job: 'Project Manager', avatar: 'https://i.pravatar.cc/150?img=3' }
];
  return (
    <div>
  <div>
    <h1 style={{ textAlign: 'center' }}>User Profiles</h1>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {users.map(user => (
        <UserProfile
          key={user.id} 
          name={user.name}
          job={user.job}
          avatar={user.avatar}
        />
      ))}
    </div>
  </div>
);
    </div>
  );
}
export default App;
import logo from './logo.svg';
import './App.css';
function Cards(props)
{
  // console.log(props)
  return(
    <>
  <div className="cards">
  <div className="card">
  <img src={props.imgsrc} alt="my pic" className="img"/>
  <div className="info">
    <span className="categ">{props.title}</span>
    <h3>{props.sname}</h3>
    <a href={props.link} target="blank">
      <button>
        WATCH NOW
      </button>
    </a>
  </div>
  </div>

  </div>
  </>
  );
}
function Aditi()
{
  return(
   <h1 className='ads'>NETFLIX TOP RATED SHOWS</h1>
  );
}
function App() {
  return (
    <div className="App">
    <Aditi/>
    <Cards
      imgsrc="https://images6.alphacoders.com/311/thumb-1920-311764.jpg"
      title= " A NETFLIX ORIGINAL"
      sname="THE BIG BANG THEORY"
      link="https://www.netflix.com/bn/title/70143830"
    />
    <Cards
      imgsrc="https://th.bing.com/th/id/R.26386682d84bd335cf622e517c378c69?rik=fvyU7u82ws%2bPBw&riu=http%3a%2f%2fimages.fanpop.com%2fimages%2fimage_uploads%2fDunder-Mifflin-the-office-342660_1024_768.jpg&ehk=ibrSgGpKsENN94M76X47l0xXmC0ApGSfzKoUAboGQ1w%3d&risl=&pid=ImgRaw&r=0"
      title= " A NETFLIX ORIGINAL"
      sname="THE OFFICE"
      link="https://www.netflix.com/in/browse/genre/83"
    />
    <Cards
      imgsrc="https://th.bing.com/th/id/OIP.qZzU927HZInCob2RlllEXwHaEK?pid=ImgDet&w=1366&h=768&rs=1"
      title= " A NETFLIX ORIGINAL"
      sname="SUITS"
      link="https://www.netflix.com/by/title/70195800"
    />
    <Cards
      imgsrc="https://www.oxigenio.fm/wp-content/uploads/2019/07/breaking-bad-1280x720.jpg"
      title= " A NETFLIX ORIGINAL"
      sname="BREAKING BAD"
      link="https://www.netflix.com/title/70143836"
    />
    <Cards
      imgsrc="https://i.ytimg.com/vi/LkvhIRlk2hE/maxresdefault.jpg"
      title= " A NETFLIX ORIGINAL"
      sname="SACRED GAMES"
      link="https://www.netflix.com/title/80115328"
    />
    </div>
  );
}

export default App;

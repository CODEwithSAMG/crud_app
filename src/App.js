import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    id: '',
    title: '',
    message: '',
    userId: '',
    body: ''
  });

  const getData = async () => {
    const storedData = localStorage.getItem('myAppData');
    console.log(storedData)

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          localStorage.setItem('myAppData', JSON.stringify(json));
        });
    }
  }


  const handleDelete = (id) => {
    const filteredData = data.filter((val) => {
      return val.id !== id;
    });
    setData(filteredData);
    localStorage.setItem('myAppData', JSON.stringify(filteredData));
  }

  const handleAddData = () => {
    const newDataWithId = { ...newData, id: Date.now() };
    setData((prevData) => [...prevData, newDataWithId]);
    setNewData({
      id: '',
      title: '',
      message: '',
      userId: '',
      body: ''
    });
    localStorage.setItem('myAppData', JSON.stringify([...data, newDataWithId]));
  }

  const handleClear = () => {
    setData(localStorage.removeItem('myAppData'))
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data, "Data")

  return (
    <>
      <div>
        <button type='button' onClick={handleClear}>
          Clear ALL
        </button>
        <input
          type="text"
          value={newData.title}
          onChange={(e) => setNewData({ ...newData, title: e.target.value })}
          placeholder="Title"
        />
        <input
          type="text"
          value={newData.message}
          onChange={(e) => setNewData({ ...newData, message: e.target.value })}
          placeholder="message"
        />
        <button onClick={handleAddData}>Add Data</button>
      </div>
      {data && data.map((curVal) => {
        const { id, title, message, userId, body } = curVal;
        return (
          <>
            <li key={id} style={{ textAlign: "center", border: "1px solid", width: "50%", padding: 30, boxShadow: "2px 2px 2px gray", margin: 20, listStyle: "none" }}>
              {id}
              {body}
              <button type='button' onClick={() => handleDelete(id)}>
                Delete
              </button>

            </li>

          </>
        )
      })}
    </>
  );
}

export default App;

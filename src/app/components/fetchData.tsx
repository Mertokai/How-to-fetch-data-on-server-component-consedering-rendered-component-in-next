const fetchData = async () => {
  const persons = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  const data = await persons.json();
  const id = data.id;
  return id;
};

export default fetchData;

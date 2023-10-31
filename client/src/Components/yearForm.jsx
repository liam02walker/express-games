export default function yearForm({ getGames }) {
  return (
    <form onSubmit={getGames}>
      <label for="yearInput">Choose Year:</label>
      <input name="yearInput" type="text"></input>
      <button>Get Games</button>
    </form>
  );
}

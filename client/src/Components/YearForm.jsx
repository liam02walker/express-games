export default function YearForm({ getGames }) {
  return (
    <form onSubmit={getGames}>
      <label for="yearInput">Choose Year:</label>
      <select name="yearInput" id="yearInput">
        <option value="1989">1989</option>
        <option value="2000">2000</option>
      </select>
      <button>Get Games</button>
    </form>
  );
}

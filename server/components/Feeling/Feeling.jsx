import axios from 'axios';
import Header from '../Header/Header';

function Feeling() {
  return (
    <section>
      <Header />
      <h1>How are you feeling today?</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          required
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
}

export default Feeling;
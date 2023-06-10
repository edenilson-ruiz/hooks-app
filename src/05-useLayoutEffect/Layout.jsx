import { LoadingQuote, Quote } from "../03-examples";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote key={quote} quote={quote} author={author} />
      )}

      <button
        type="button"
        className="btn btn-primary"
        disabled={isLoading}
        onClick={increment}
      >
        Next quote
      </button>
    </>
  );
};

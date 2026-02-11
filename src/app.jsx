function App() {
  return (
    <>
      <div
        style={{
          padding: "20px",
          wordWrap: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {window.location.href}
      </div>
      <p>mediaSession: {String("mediaSession" in navigator)}</p>
      <p>MediaMetadata: {String("MediaMetadata" in window)}</p>
      <p>{navigator.userAgent}</p>
    </>
  );
}

export default App;

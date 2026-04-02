import ScrollToTop from "./ScrollToTop";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-10 right-10 z-40 flex flex-col gap-3">
      <ScrollToTop />
    </div>
  );
};

export default FloatingActions;

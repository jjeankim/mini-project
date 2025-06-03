const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-green-200"></div>
    </div>
  );
};

export default LoadingSpinner;

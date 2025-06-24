const CasesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">项目案例</h1>
      <p className="mt-4">以下是我们的一些项目案例。</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="border p-4 rounded">
          <h2 className="font-bold">项目一</h2>
          <p>项目一的简要介绍。</p>
        </div>
        <div className="border p-4 rounded">
          <h2 className="font-bold">项目二</h2>
          <p>项目二的简要介绍。</p>
        </div>
        <div className="border p-4 rounded">
          <h2 className="font-bold">项目三</h2>
          <p>项目三的简要介绍。</p>
        </div>
      </div>
    </div>
  );
};

export default CasesPage; 
const PageTitleMock = ({ title, subtitle, downloadLink }: any) => (
  <div data-testid="page-title">
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <a href={downloadLink}>Download</a>
  </div>
);

export default PageTitleMock;
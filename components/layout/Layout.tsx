const PageWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="min-h-screen h-full flex flex-col justify-center items-center w-full">
      {children}
    </div>
  );
};

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};

export default Layout;

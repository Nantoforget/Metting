const Meeting= ({params}:{params:{id:string}}) => {
  return (
    <>
      <div>This is Meeting Room:#{params.id}</div>
    </>
  )
};
export default Meeting
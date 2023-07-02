

function Info({user})
{
    const currentYear = new Date().getFullYear();
    return (
        <div className="info">
          <p id="infoUser"> Created By {user.fname} {user.lname}</p>
          <p id="infoCopyright">Copyright {currentYear}</p>
        </div>
      );
}

export default Info
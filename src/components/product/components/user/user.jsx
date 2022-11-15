function User(){

  const styleProfile={
    backgroundImage :"url('https://radiometropolitanaporto.pt/images/pngtree-user-vector-avatar-png-image_1541962.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    width:45,
    height:45,
    
    borderRadius: 12,
  }
    return <span className="float-end"><div style={styleProfile}></div></span> 


}

export default User;
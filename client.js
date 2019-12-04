const net = require("net");

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.149',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () =>{
    conn.write('Name: ABN');
    // conn.write('ALI');
    // console.log('connection made');
  })
  conn.on('connect', () =>{
    setInterval(() => {
      conn.write('Move: up');
    }, 50);
    
    // conn.write('Move: left');

  })

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

const connObj = {
  connect
}

module.exports = connObj;
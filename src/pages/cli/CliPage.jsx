import {useState} from 'react'

import './cli-page.scss'

function CliPage() {


  const bash = {
    history: [],
    commands: {
      "help": "bla bla bla bla bla bla",
      "invalid": "Invalid command",
      "exit": "Good Bye",
    }
  }


  const [input, setInput] = useState('')

  const toMain = () => window.location.href = '/'

  const handleInput = (e) => setInput(e.target.value)

  const handleKeys = (e) => {
    if (e.keyCode === 13) {         // handle enter

      handleCommands(input)
  
    } else if (e.keyCode === 38) {  // handle up

    } else if (e.keyCode === 40) {  // handle down

    }
  }

  const handleCommands = (command) => {
    if (command.length === 0) return

    if (command === 'exit') toMain()

    if (bash.commands[command]) {
      bash.history.push(input)
      console.log(bash.commands[command])
    } else {
      console.log(`${bash.commands['invalid']} ${command}`)
    }

    setInput('')
  }
  
  
  return (
    <main className="cli">
      <div className='cli-inner scrollable'>
        <p className='cli-out'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere doloremque ut saepe animi, accusamus perspiciatis, vel earum eaque, autem delectus vitae? Incidunt sapiente at, dolore commodi consequatur vel voluptates minima consectetur dolorem quo similique unde provident ad, autem dolores eveniet inventore natus recusandae harum neque laboriosam! Aut vitae fugit voluptate quo illo labore aliquam, laboriosam dignissimos voluptatem in? Asperiores minus ducimus consequuntur vero reprehenderit veritatis id nesciunt similique facilis debitis iste expedita quos iure rerum consectetur modi tempora praesentium, porro dolor rem excepturi facere maxime distinctio nostrum! Odit delectus quasi a nostrum voluptatum asperiores animi reiciendis vero vitae eligendi. <br/>
          
        </p>
        <div className='cli-in'>
          <span className="terminal-line">root@user-kali:</span> 
            ~$ 
            <input className='terminal-in' type="text" onChange={handleInput} value={input} onKeyDown={handleKeys} autoFocus/>
        </div>
      </div>
    </main>
  )
}

export default CliPage
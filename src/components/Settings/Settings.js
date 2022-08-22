import React from 'react'
import {InputGroup} from "react-bootstrap"
import Form from 'react-bootstrap/Form'

const data = ["Приватный профиль",
    "Скрывать прочитанное (каталог)",
    "Скрывать книги в процессе (каталог)",
    "Скрыть комментарии внутри глав",
    "Отключить отображение статуса «в сети»",
    "Скрывать брошенное, отложенное и запланированное (каталог)",
    "Режим тестирования"
]

const Settings = () => {
    return (
        <>
            { data.map((item, index) => (
                <InputGroup className="mb-1" key={index}>
                    <Form.Control
                        type="text"
                        placeholder={item}
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                    />
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup>
            )) }
        </>
    )
}

// constructor() {
//     super();
//     this.state = { YourInputName: false };
//     this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
//   }
//
//   render() {
//     return (
//       <div>
//         <Checkbox
//           name="YourInputName"
//           onChange={this.handleCheckboxChange} />
//       </div>
//     );
//   }
//
//   handleCheckboxChange(event) {
//     const target = event.target
//     const checked = target.checked
//     const name = target.name
//     this.setState({
//         [name]: checked,
//     });
//   }

export default Settings
import React, { useState } from 'react'

import PersonalInfoShow from './PersonalInfoShow'
import PersonalInfoEdit from './PersonalInfoEdit'

function PersonalInfo () {
  const [editable, setEditable] = useState(false)
  const [editButton, setEditbutton] = useState('Edit')

  const handleClick = () => {
    editable ? setEditable(false) : setEditable(true)
    editButton === 'Edit' ? setEditbutton('Cancel') : setEditbutton('Edit')
  }
  return (
    <>{ editable ? <PersonalInfoEdit /> : <PersonalInfoShow /> }
      <button
        type="button"
        className="button is-primary"
        onClick={handleClick}
        data-testid="submitButton">
        {editButton}
      </button>
    </>
  )
}

export default PersonalInfo

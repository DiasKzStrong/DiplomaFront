import { bindActionCreators } from '@reduxjs/toolkit'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import {actions as dsActions} from '../../storage/dashboard-settings/ds-settings.slice'
import { actions as spellActions } from '@/storage/spell/spellwords.slice'

const dactions = {
    ...dsActions,
    ...spellActions
}


const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(()=>bindActionCreators(dactions,dispatch),[dispatch])
}

export default useActions
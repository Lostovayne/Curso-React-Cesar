import { configureStore    } from "@reduxjs/toolkit"
import procedenciaReducer from '../features/procedenciaSlice'

//procedenciaReducer   el name: de mi reducer + la palabra Reducer

export const store = configureStore({
  
  reducer:{
    
    
    
    procedencia : procedenciaReducer
    
  }
  
  
  
})

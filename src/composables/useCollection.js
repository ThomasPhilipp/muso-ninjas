import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

/* CRUD methods for a certain collection */
const useCollection = (collection) => {

  const error = ref(null) // no global error as we can have multiple instances of this composable

  // add a new document
  const addDoc = async (doc) => {
    error.value = null

    try {
      await projectFirestore.collection(collection).add(doc)
    }
    catch(err) {
      console.log(err.message)
      error.value = 'could not send the message'
    }
  }

  return { error, addDoc }

}

export default useCollection
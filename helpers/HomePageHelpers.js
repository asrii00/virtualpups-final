 const getDogImage  = (breed) => {
    switch (breed) {
      case 'Border collie':
        return require('../images/bordercollie.jpg');
      case 'Golden retriever':
        return require('../images/retriever.jpg');
      
      case 'German shepherd':
        return require('../images/gsd.jpg'); 
      
      case 'Chihuahua':
        return require('../images/chihuahua.jpg');
      
      default:
        return require('../images/retriever.jpg'); 
    }
  };
  
  const getFavoriteDog = async () => {
    try {
        const favoriteDogId = await AsyncStorage.getItem('favoriteDogId');
        return favoriteDogId ? parseInt(favoriteDogId) : null;
    } catch (error) {
        console.error('Error retrieving favorite dog:', error);
        return null;
    }
};

export {getDogImage, getFavoriteDog}
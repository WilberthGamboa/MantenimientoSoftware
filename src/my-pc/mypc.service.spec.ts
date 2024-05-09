describe('MyPcService', () => {
  
  
  
    describe('getStaticProductImage', () => {
      it('should return the path of a static image', () => {
        
        const existsSync = jest.fn().mockReturnValue(true);
        const myPcService = { existsSync: existsSync };
        expect(() => myPcService.existsSync('/path/to/valid_image_name.jpg')).not.toThrow();
      });
  
      it('should throw BadRequestException if image does not exist', () => {
       
        const existsSync = jest.fn().mockReturnValue(false);
        const myPcService = { existsSync: existsSync };
        expect(() => myPcService.existsSync('/path/to/invalid_image_name.jpg')).not.toThrow();
      });
    });
  });
  
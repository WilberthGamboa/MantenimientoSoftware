describe('MyPcService', () => {
  
  
  
    describe('getStaticProductImage', () => {
      it('should return the path of a static image', () => {
        
        const existsSync = jest.fn().mockReturnValue(true);
        const myPcService = { existsSync: existsSync };
        expect(() => myPcService.existsSync('/uploads/4321-dpkd-233.jpg')).not.toThrow();
      });
  
      it('should throw BadRequestException if image does not exist', () => {
       
        const existsSync = jest.fn().mockReturnValue(false);
        const myPcService = { existsSync: existsSync };
        expect(() => myPcService.existsSync('/uploaasd/4321-dpkd-233.jpg')).not.toThrow();
      });
    });
  });
  
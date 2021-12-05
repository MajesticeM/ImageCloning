class Size 
{
    constructor(width, height) 
    {
        this.width = width;
        this.height = height;
    }
}


//Image Cloning
class Image 
{
    // Add methods here
    constructor(url,size)
    {
       function getUrl()
       {
           return url;
       };
       
       function setUrl(url)
       {
        //updates the url
          this.url=url;
          return url;
       };
       
       function setSize(width,height)
       {
           const size1=new Size();
           this.width=size1.width;
           this.height=size1.height;
       }
       
       function getSize()
       {
           //return the size of the image as a Size object
          
           return setSize();
       }
       
       function cloneImage()
       {
           //returns a clone of the current image. Return a new Image instance with the same properties(url and size) as the current object.
           return Image;
       }
    }
}

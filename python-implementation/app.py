from PIL import Image, ImageEnhance


#TODO: ADD CLI argument input

im = Image.open("../input-src/v1-test.jpg")
im = im.reduce(3)
im = ImageEnhance.Color(im).enhance(5)
im = ImageEnhance.Brightness(im).enhance(.6)
im.save("../input-src/v1-test-deg.jpg", format=None, quality=5)
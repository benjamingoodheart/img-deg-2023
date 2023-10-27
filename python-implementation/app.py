from PIL import Image, ImageEnhance


#TODO: ADD CLI argument input

im = Image.open("../input-src/moss-text.jpg")
im = im.reduce(3)
im = ImageEnhance.Color(im).enhance(1.5)
im = ImageEnhance.Brightness(im).enhance(1)
im = ImageEnhance.Sharpness(im).enhance(2)
im.save("../input-src/moss-text-deg-3.jpg", format=None, quality=5)
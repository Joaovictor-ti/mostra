import pygame

pygame.init() 

screen = pygame.display.set_mode((400, 300))
pygame.display.set_caption('Pygame Test')

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    screen.fill((0,0,0))   
    pygame.draw.circle(screen, (0, 255, 0), (200, 150), 75)
    
    pygame.display.flip() 
pygame.mixer.music.load("sound.wav")
pygame.mixer.music.play()
pygame.quit()
library(tidyverse)
library(ggplot2)
library(extrafont)
library(ggthemes)
install.packages("jsonlite")
library(jsonlite)
library (httpgd)
library (ggbump)
install.packages("ggtext")
library (hrbrthemes)
library (scales)
library (ggtext)

hgd()#inicia el servidor
hgd_browse()#inicia browser

setwd("F:/GIT/Portafolio/Front_End/Portfolio") #/src/assets/Images
loadfonts(device = "win", quiet = TRUE)

data <-fromJSON("../Portfolio/src/assets/data/viz.json", flatten = T, simplifyVector = TRUE)

df_soft <- as_tibble(data$soft_skills, validate = F) %>% 
pivot_longer(cols = 1:7, names_to="Soft skills", values_to="Score")  

#mutate(Score = Score/100)

df_hard <- as_tibble(data$hard_skills, validate = F)

hard_skills <-as_tibble(df_hard, validate = F)  %>% 
select("Diseño de sistemas","Programación") %>% 
distinct() %>% 
pivot_longer(cols = 1:2, names_to="Hard skills", values_to="Score")

Idiomas <-as_tibble(df_hard, validate = F) %>% 
select("Idiomas") %>% 
data.frame(Idiomas$Idiomas[1], Idiomas$Idiomas[2], Idiomas$Idiomas[3]) %>% 
select("language", "img", "level")

colnames(Idiomas)


lenguajes_pr <-as_tibble(df_hard, validate = F) %>% 
select("lenguajes-programacion") %>% 
distinct() %>% 
data.frame(programas$programas[1]lenguajes_pr$`lenguajes-programacion`[1],lenguajes_pr$`lenguajes-programacion`[2],lenguajes_pr$`lenguajes-programacion`[3]) %>% 
select("R","Typescript","JavaScript")

programas <-df_hard %>% 
select("programas") %>% 
distinct() %>% 
data.frame(programas$programas[1],programas$programas[],programas$programas[3],programas$programas[4],programas$programas[5],programas$programas[6]) %>% 
select("VSC","R.Studio","QGIS","MySQL","Netbeans","Spring.Boot")

data<- data.frame(x,y) %>%  group_by(x) %>%  arrange(x)
  
x<-rep(c(1:7), nrow=7)
y<-rep(sample(1:7), each=7)

data<-data  %>% 
group_by(x) %>% 
arrange(y)
pivot_longer(cols= 2:8, names_to="names", values_to="valores") %>% 
group_by(x) %>% 
mutate(names = rep(1:n()))

#ggplot(df_soft, aes(x=`Soft skills`, y=Score)) + geom_segment( aes(x=`Soft skills`, xend=`Soft skills`, y=0, yend=Score), alpha=0.7,,size= 4, color=colores) +

ggplot(df_soft) +
geom_segment( aes(x=`Soft skills`, xend=`Soft skills`, y=0, yend=Score), alpha=0.7,size= 4, color=colores) +
  
  geom_point (aes(x=`Soft skills`, y=100), 
  size=15, colour=colores, fill=alpha(colores, 0.3), alpha=0.7, shape=2, stroke=5) + 
  
  geom_point (aes(x=`Soft skills`, y=95), 
  size=20, colour=colores, fill=alpha(colores, 0.3), alpha=0.7, shape=2, stroke=5) + 
  
  geom_point (aes(x=`Soft skills`, y=85), 
  size=30, colour=colores,  fill=alpha(colores, 0.3),alpha=0.7, shape=2,stroke=5) +   
  
  geom_point (aes(x=`Soft skills`, y=75), 
  size=40, colour=colores, fill=alpha(colores, 0.3), alpha=0.7, shape=2, stroke=5) + 
  
  geom_point (aes(x=`Soft skills`, y=65), 
  size=45, colour=colores, fill=alpha(colores, 0.3), alpha=0.7, shape=2, stroke=5) + 

  geom_point (aes(x=`Soft skills`, y=55), 
  size=50, colour=colores, fill=alpha(colores, 0.3), alpha=0.7, shape=2, stroke=5) + 

  geom_point (aes(x=`Soft skills`, y=40), 
  size=60, colour=colores, fill=alpha(colores, 0.3), alpha=0.7, shape=2, stroke=5) + 
  
  geom_point (aes(x=`Soft skills`, y=25), 
  size=65, colour=colores, fill=alpha(colores, 0.3), alpha=0.7, shape=2, stroke=5) + 
  
  geom_text(aes(x=`Soft skills`, y=0.1, label = paste0(`Soft skills`)), hjust=0, vjust=0, size=10, angle=90,
  family = "sans-serif", fontface="bold", colour= colores) + 
  geom_text(aes(x=`Soft skills`, y=Score, label = paste0(Score, "%")), hjust=0.5, vjust=0.5, size=8,
  family="sans-serif", fontface="bold", colour= colores) + 
  theme_ipsum() +
  theme(legend.position = "none",
        axis.text.x = element_blank(),
        axis.text.y =  element_blank(),
        plot.margin = margin (1, 1, 1, 1, "cm")) +
  labs(y = " ",
       x = " ")
  #ggsave(filename = "totales_16_21.jpeg", dpi=300)
  
ggplot(df_soft) +
geom_bar( aes(x=`Soft skills`, y=Score), alpha=0.7, size= 4, fill=colores, stat="identity") +
geom_text(aes(x=`Soft skills`, y=0.1, label = paste0(`Soft skills`)), hjust=0, vjust=0, size=10, angle=90,
family = "sans-serif", fontface="bold", colour= colores) + 
geom_text(aes(x=`Soft skills`, y=Score, label = paste0(Score, "%")), hjust=0.5, vjust=1, size=8,
family="sans-serif", fontface="bold", colour= colores) + 
theme_ipsum() +
theme(legend.position = "none",
        axis.text.x = element_blank(),
        axis.text.y =  element_blank(),
        plot.margin = margin (1, 1, 1, 1, "cm")) +
labs(y = " ",
       x = " ")+
ggsave(filename = "soft.jpeg", dpi=300)


colores <- c("#1D5234", "#6C947E","#356349", "#AD796B","#723829", "#AE796B","#142C1F")

ggplot(data, aes(x=x, y=y)) +
  geom_segment( aes(x=x, xend=x, y=0, yend=y)) +
  geom_point( size=5, color="red", fill=alpha("orange", 0.3), alpha=0.7, shape=21, stroke=2) 
library(tidyverse)
library(ggplot2)
library(extrafont)
library(ggthemes)

library(jsonlite)
library (httpgd)
library (ggbump)

library (hrbrthemes)
library (scales)
library (ggrepel)
library (MetBrewer)
library (ggside)

hgd()#inicia el servidor
hgd_browse()#inicia browser

setwd("F:/GIT/Portafolio/Front_End/Portfolio//src/assets/Images")
loadfonts(device = "win", quiet = TRUE)

data <-fromJSON("F:/GIT/Portafolio/Front_End/Portfolio/src/assets/data/viz.json", flatten = T, simplifyVector = TRUE)


df_soft <- as_tibble(data$soft_skills, validate = F) %>% 
pivot_longer(cols = 1:7, names_to="Soft skills", values_to="Score")  

hsize <- 2
cp <- coord_polar(theta = "y")
cp$is_free <- function() TRUE

ggplot(df_soft, aes(x=hsize, y=Score)) +
  geom_bar(stat="identity", color = "#246068", fill="#338A2E") +
  cp +
  facet_wrap(~`Soft skills`, strip.position = "bottom", nrow= 1, ncol=7) +
  xlim(c(0.2, hsize + 0.5)) +
  theme_void() +
  theme(aspect.ratio = 1,
        legend.position = "none",
        axis.text.x = element_blank(),
        axis.text.y = element_blank(),
        strip.text = element_text(family= "sans-serif", face="bold", color="#104040", size= 4),
        plot.background = element_rect(color="#99aca2" , fill ="#99aca2"),
        plot.margin = margin (.2, .2, .2, .2, "cm"))+
        #plot.title = element_text(family = "sans-serif", face="bold", color="#162856", size= 8)) +
  labs(y = " ",
       x = " ") +
  ggsave(filename = "soft_c.png", dpi=600,width = 6, height = 2.5)

df_hard <- as_tibble(data$hard_skills, validate = F)

hard_skills <-as_tibble(df_hard, validate = F)  %>% 
select("Diseño de sistemas","Programación") %>% 
distinct() %>% 
mutate(resto_d = c(70)) %>% 
mutate(resto_p = c(50)) %>% 
pivot_longer(cols = 1:4, names_to="Hard skills", values_to="Score")

pivot_longer(cols = 2:3, names_to="Hard skills", values_to="Score")

ggplot(hard_skills, aes(x=hsize, y=Score, group= `Hard skills`)) +
  geom_bar(stat="identity", color = "#104040", fill="#338A2E") +
  cp +
  facet_wrap(~`Hard skills`, strip.position = "bottom", nrow= 1, ncol=2) +
  xlim(c(0.2, hsize + 0.5)) +
  theme_void() +
  theme(aspect.ratio = 1,
        legend.position = "none",
        axis.text.x = element_blank(),
        axis.text.y = element_blank(),
        strip.text = element_text(family= "sans-serif", face="bold", color="#104040", size= 4),
        plot.background = element_rect(color="#99aca2" , fill ="#99aca2"),
        plot.margin = margin (.2, .2, .2, .2, "cm"))+
        #plot.title = element_text(family = "sans-serif", face="bold", color="#162856", size= 8)) +
  labs(y = " ",
       x = " ") +
  ggsave(filename = "hard.png", dpi=600, width = 4, height = 1)

Idiomas <-as_tibble(df_hard, validate = F) %>% 
select("Idiomas") %>% 
data.frame(Idiomas$Idiomas[1], Idiomas$Idiomas[2], Idiomas$Idiomas[3]) %>% 
select("language", "level")

Idiomas <-Idiomas  %>%  
add_row(language = "Inglés", level = 0)  %>% 
add_row(language = "Francés", level = 0)  %>% 
add_row(language = "Italiano", level = 50) 

Idiomas <-Idiomas  %>% 
mutate(no = c(0,0,50))


ggplot(Idiomas, aes(x=hsize, y=level, fill=level)) +
  geom_bar(position="stack", stat="identity", color = "#104040") +
  scale_fill_manual(values = c("#338A2E","#71AA97", "#338A2E")) +
  cp +
  facet_wrap(~language, strip.position = "bottom", nrow= 1, ncol=3) +
  xlim(c(0.2, hsize + 0.5)) +
  theme_void() +s
  theme(aspect.ratio = 1,
        legend.position = "none",
        axis.text.x = element_blank(),
        axis.text.y = element_blank(),
        strip.text = element_text(family= "sans-serif", face="bold", color="#104040", size= 4),
        plot.background = element_rect(color="#99aca2" , fill ="#99aca2"),
        plot.margin = margin (.2, .2, .2, .2, "cm")) +
        #plot.title = element_text(family = "sans-serif", face="bold", color="#162856", size= 8)) +
  labs(y = " ",
       x = " ") +
  ggsave(filename = "idiomas.png", dpi=600, width = 4, height = 1)

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


ggplot(df_soft) +
geom_segment( aes(x=`Soft skills`, xend=`Soft skills`, y=0, yend=Score), alpha=0.5, size= 2, color=colores) +
  geom_point (aes(x=`Soft skills`, y=Score), size=4, colour=colores, fill=alpha(colores, 0.3), alpha=0.7, shape=21, stroke=1) +   
  geom_text(aes(x=`Soft skills`, y=0.1, label = paste0(`Soft skills`)), hjust=0, vjust=0, size=2, #angle=90,
  family = "sans-serif", fontface="bold", colour= colores) + 
  geom_text(aes(x=`Soft skills`, y=Score, label = paste0(Score, "%")), hjust=0.5, vjust=0.5, size=2,
  family="sans-serif", fontface="bold", colour= "#162856") + 
  scale_y_continuous (breaks = c(seq(0, 100, by=25)), 
                      labels = c("0%", "25%", "50%", "75%","100%")) +
  coord_flip () +
  theme_ipsum() +
  theme(legend.position = "none",
        plot.background = element_rect(color="#99aca2" , fill ="#99aca2"),
        axis.text.x = element_text(family = "sans-serif", face="bold", color="#162856", size= 5),
        axis.text.y =  element_blank(),
        plot.margin = margin (.2, .2, .2, .2, "cm"),
        plot.title = element_text(family = "sans-serif", face="bold", color="#162856", size= 10)) +
  labs(y = " ",
       x = " ",
       title = "Soft skills") +
ggsave(filename = "soft.png", dpi=300, width = 6, height = 1.5)




colores <- c("#1D5234", "#6C947E","#356349", "#AD796B","#723829", "#AE796B","#142C1F")
colores <- c("#551200","#AA5039","#802B15","#4C986D","#003D1A","#28794C","#0F5B30")


# Define the number of points
points=500

# Define the Golden Angle
angle=pi*(3-5**0.5)

t <- (1:points) * angle
x <- sin(t)
y <-cos(t)
colores <- rep((colors), nrow=500)
df <- data.frame(t, x, y,colores)

# Make a scatter plot of points in a spiral
p <- ggplot(df, aes(x*t, y*t, color=t))+ 
geom_point(size=6, alpha=0.5, color= "#2f357c") +
theme(legend.position = "none", axis.title.x=element_blank(),
axis.title.y=element_blank(), axis.text.x=element_blank(), 
axis.ticks.x=element_blank(),axis.text.y=element_blank(), 
axis.ticks.y=element_blank(),axis.line =element_blank() ,
panel.grid.major = element_blank(), panel.grid.minor = element_blank(), 
panel.border = element_blank(), panel.background = element_blank()) +
ggsave(filename = "p6.png", dpi=300, width = 3, height = 3)


#scale_fill_manual(values=met.brewer("Pissaro", 3))
colors <- c("#4c825d","#0e2a4d")

colors <-data.frame(colors=sample(met.brewer("Renoir"),5))
1 #e48171
2 #6c5d9e
3 #f5bb50
4 #bf3729
5 #2f357c
import plotly.graph_objects as go
import numpy as np

# --- 1. CRIANDO OS DADOS ---

# Dados do Gráfico 1: Marketing (Cubo/Dispersão)
np.random.seed(42)
visualizacoes = np.random.randint(1000, 15000, 80)
cliques = visualizacoes * np.random.uniform(0.05, 0.20, 80)
inscritos = cliques * np.random.uniform(0.10, 0.40, 80)

trace_marketing = go.Scatter3d(
    x=visualizacoes, y=cliques, z=inscritos,
    mode='markers',
    marker=dict(size=7, color=inscritos, colorscale='Viridis', opacity=0.8),
    name='Anúncios',
    visible=True
)

# Dados do Gráfico 2: Engenharia (Superfície/Montanha)
temp = np.linspace(50, 150, 30)
pressao = np.linspace(1, 5, 30)
X, Y = np.meshgrid(temp, pressao)
Z = 100 - ((X - 100)**2 / 40) - ((Y - 3)**2 * 15)

trace_engenharia = go.Surface(
    x=temp, y=pressao, z=Z,
    colorscale='Turbo',
    colorbar=dict(title='Resistência', x=1.05),
    visible=False
)

# --- 2. TEXTOS EXPLICATIVOS CORRIGIDOS (Com quebra de linha <br>) ---

# Adicionamos mais quebras de linha e centralizamos
texto_marketing = (
    "<b>Situação (Marketing):</b> Cada ponto representa uma campanha.<br>"
    "Usamos a Dispersão 3D para identificar agrupamentos (clusters) de sucesso.<br>"
    "Quanto mais alto e amarelado o ponto, maior foi a conversão de inscritos (Z)<br>"
    "baseada nas visualizações (X) e cliques (Y)."
)

texto_engenharia = (
    "<b>Situação (Engenharia):</b> A Superfície de Resposta ajuda na otimização de processos.<br>"
    "O objetivo é achar o 'ponto ideal' da fórmula.<br>"
    "O pico vermelho da montanha mostra a combinação exata de Temperatura (X)<br>"
    "e Pressão (Y) para alcançar a Resistência máxima (Z)."
)

# --- 3. MONTANDO A TELA E O MENU INTERATIVO ---

fig = go.Figure(data=[trace_marketing, trace_engenharia])

# Função para criar o design da caixa de texto (Evita repetir código)
def criar_caixa_texto(texto):
    return [dict(
        text=texto, 
        showarrow=False, 
        x=0.5, y=-0.15, # Posição
        xref='paper', yref='paper', # Usa o tamanho da tela como referência
        xanchor='center', yanchor='top', 
        align='center', # Centraliza o texto dentro da caixa
        font=dict(size=14, color="black"),
        bgcolor="#E8E8E8", # Cinza um pouco mais elegante
        borderpad=15, # Espaço entre o texto e a borda da caixa
        bordercolor="gray", borderwidth=1 # Bordinha suave
    )]

fig.update_layout(
    title_text="Visualizando a Complexidade em 3D",
    height=800,
    margin=dict(l=10, r=10, b=180, t=100), # Aumentei o 'b' (bottom) para 180 para dar bastante espaço
    
    scene=dict(
        xaxis_title='Visualizações da Pub (X)',
        yaxis_title='Cliques p/ Landing Page (Y)',
        zaxis_title='Nº de Inscritos (Z)'
    ),
    
    # Aplica a caixa de texto corrigida do Marketing inicialmente
    annotations=criar_caixa_texto(texto_marketing),
    
    # Menu Dropdown
    updatemenus=[dict(
        active=0,
        buttons=list([
            dict(label="1. Modelo de Marketing (Dispersão)",
                 method="update",
                 args=[{"visible": [True, False]}, 
                       {"scene.xaxis.title": "Visualizações da Pub (X)",
                        "scene.yaxis.title": "Cliques p/ Landing Page (Y)",
                        "scene.zaxis.title": "Nº de Inscritos (Z)",
                        "annotations": criar_caixa_texto(texto_marketing)}]),
            
            dict(label="2. Modelo de Engenharia (Superfície)",
                 method="update",
                 args=[{"visible": [False, True]}, 
                       {"scene.xaxis.title": "Temperatura °C (X)",
                        "scene.yaxis.title": "Pressão atm (Y)",
                        "scene.zaxis.title": "Resistência (Z)",
                        "annotations": criar_caixa_texto(texto_engenharia)}])
        ]),
        direction="down",
        pad={"r": 10, "t": 10},
        showactive=True,
        x=0.01,
        xanchor="left",
        y=1.08,
        yanchor="top"
    )]
)

fig.show()
class LevelController extends Component {
    start() {
        SceneManager.loadScene(GenericLevel, true)
    }

    update() {
        let enemyGameObject = GameObject.findGameObjectsWithTag("Enemy")
        if (!enemyGameObject) {
            // SceneManager.nextScene = Level02
            SceneManager.loadScene(Level02)
        }
    }
}
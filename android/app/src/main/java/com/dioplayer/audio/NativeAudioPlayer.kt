package com.dioplayer.audio

import android.content.Context
import androidx.media3.common.AudioAttributes
import androidx.media3.common.C
import androidx.media3.common.MediaItem
import androidx.media3.exoplayer.ExoPlayer

class NativeAudioPlayer(private val context: Context) {

    private var player: ExoPlayer? = null

    fun play() {
        if (player == null) {
            player = ExoPlayer.Builder(context).build()

            val audioAttributes = AudioAttributes.Builder()
                .setUsage(C.USAGE_MEDIA)
                .setContentType(C.AUDIO_CONTENT_TYPE_MUSIC)
                .build()

            player?.setAudioAttributes(audioAttributes, true)

            val mediaItem = MediaItem.fromUri(
                "android.resource://${context.packageName}/raw/test_audio"
            )

            player?.setMediaItem(mediaItem)
            player?.prepare()
        }

        player?.play()
    }

    fun pause() {
        player?.pause()
    }

    fun stop() {
        player?.stop()
    }

    fun release() {
        player?.release()
        player = null
    }
}
